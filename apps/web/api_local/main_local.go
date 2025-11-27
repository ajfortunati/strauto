package main

import (
	"fmt"
	"net/http"
)

func LocalHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello from local Go server!")
}

func main() {
	http.HandleFunc("/", LocalHandler)
	fmt.Println("Starting local server on :8080")
	http.ListenAndServe(":8080", nil)
}