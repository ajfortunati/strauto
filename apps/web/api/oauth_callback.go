package handler

import (
	"context"
	"fmt"
	"net/http"
)

func OauthCallback(ctx context.Context, w http.ResponseWriter, r *http.Request) error {
	// parse code from Strava
	code := r.URL.Query().Get("code")
	if code == "" {
		http.Error(w, "missing code", http.StatusBadRequest)
		return nil
	}
	// exchange with Strava for tokens
	fmt.Fprintf(w, "Oauth callback received code: %s\n", code)
	return nil
}