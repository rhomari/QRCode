package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/skip2/go-qrcode"
)

func main() {

	http.HandleFunc("/createQRCODE", createQRCodeHandler)

	http.Handle("/", http.FileServer(http.Dir("./html")))
	err := http.ListenAndServe(":2304", nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("serving on port 2304...")

}
func createQRCodeHandler(w http.ResponseWriter, r *http.Request) {
	starttime := time.Now()
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == "POST" {
		err := r.ParseForm()
		if err != nil {
			log.Printf("%s", err.Error())

		}
		stringtoencode := r.PostForm.Get("stringtoencode")

		pngimage, err := qrcode.Encode(stringtoencode, qrcode.Medium, 256)
		if err != nil {
			log.Printf("%s", err.Error())
		}
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Write(pngimage)
		fmt.Printf("done in %v\n", time.Since(starttime))
	} else {
		fmt.Fprintf(w, "That was a bad request")
	}

}
