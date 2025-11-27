package main

import (
	"net/http"
)

func LocalHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello world from Go WASM in Strauto!"))
}

func main() {
	http.HandleFunc("/", LocalHandler)
	http.ListenAndServe(":8080", nil)
}