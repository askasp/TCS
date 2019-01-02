package main

import (
	"encoding/json"
	"fmt"
	"github.com/graphql-go/graphql"
	"net/http"
	"strings"
)

type Company struct {
	ID     string   `json:"id,omitempty"`
	Name   string   `json:"name"`
	Theses []Thesis `json:"theses"`
}

type Thesis struct {
	ID       string   `json:"id,omitempty"`
	Title    string   `json:"title"`
	Summary  string   `json:"summary"`
	Image    string   `json:"image"`
	Company  string   `json:"company"`
	Keywords []string `json:"keywords"`
}

var companies []Company = []Company{
	Company{
		ID:   "1",
		Name: "Kongsberg-Gruppen",
	},
	Company{
		ID:   "2",
		Name: "4Subsea",
	},
}
var theses []Thesis = []Thesis{
	Thesis{
		ID:      "1",
		Title:   "Underwater cable localisation",
		Summary: "Detect underwater cables by using power crystals and the horoscope",
		Company: "Kongsberg-gruppen",
		Image:   "https://www.kongsberg.com/~/media/KOG/Images/Kongsberg%20Maritime/massterly1-img.ashx?as=1&h=390&la=en&mw=756&w=756",
	},
	Thesis{
		ID:      "2",
		Title:   "Sonar tracking",
		Summary: "We lost our sonar, please help us find it..",
		Company: "4subsea",
		Image:   "https://www.4subsea.com/wp-content/uploads/2017/02/Subsea-Integrity-Monitoring-4Subsea-e1488216010891-1920x1252.jpg",
	},
	Thesis{
		ID:      "3",
		Title:   "Selling Low cost wares",
		Summary: "It's focking impossible to sell this shit with a profit need motivated student who can put in a very high effor with a very sad amount of return",
		Company: "Norsk Staal",
		Image:   "https://img.gfx.no/1820/1820743/1200047284_25493.1000x667.jpg",
	},
}

func Filter(theses []Thesis, f func(Thesis) bool) []Thesis {
	vsf := make([]Thesis, 0)
	for _, v := range theses {
		if f(v) {
			vsf = append(vsf, v)
		}
	}
	return vsf
}

func main() {

	fmt.Println("hei")

	thesisType := graphql.NewObject(graphql.ObjectConfig{
		Name: "Thesis",
		Fields: graphql.Fields{
			"id": &graphql.Field{
				Type: graphql.String,
			},
			"title": &graphql.Field{
				Type: graphql.String,
			},
			"summary": &graphql.Field{
				Type: graphql.String,
			},
			"company": &graphql.Field{
				Type: graphql.String,
			},
			"image": &graphql.Field{
				Type: graphql.String,
			},
		},
	})
	rootQuery := graphql.NewObject(graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"theses": &graphql.Field{
				Type: graphql.NewList(thesisType),
				Args: graphql.FieldConfigArgument{
					"company": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: func(params graphql.ResolveParams) (interface{}, error) {
					company := params.Args["company"].(string)
					filtered := Filter(theses, func(v Thesis) bool {
						return strings.Contains(v.Company, company)
					})
					return filtered, nil
				},
			},
		},
	})

	rootMutation := graphql.NewObject(graphql.ObjectConfig{
		Name: "Mutation",
		Fields: graphql.Fields{
			"createThesis": &graphql.Field{
				Type: thesisType,
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"title": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"summary": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"company": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: func(params graphql.ResolveParams) (interface{}, error) {
					var thesis Thesis
					thesis.ID = params.Args["id"].(string)
					thesis.Summary = params.Args["summary"].(string)
					thesis.Title = params.Args["title"].(string)
					thesis.Company = params.Args["company"].(string)
					thesis.Image = params.Args["image"].(string)
					theses = append(theses, thesis)
					return thesis, nil
				},
			}},
	})

	schema, _ := graphql.NewSchema(graphql.SchemaConfig{
		Query:    rootQuery,
		Mutation: rootMutation,
	})
	http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {
		(w).Header().Set("Access-Control-Allow-Origin", "*")
		result := graphql.Do(graphql.Params{
			Schema:        schema,
			RequestString: r.URL.Query().Get("query"),
		})
		json.NewEncoder(w).Encode(result)
	})
	http.ListenAndServe(":12345", nil)
}
