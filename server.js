const express = require("express");
const app = express();

//.env dosyasını okuyabilmek için dotenv tanımlanır
const dotenv = require("dotenv");
dotenv.config();

//apiler genelde clientten json verileri alır. expressin bunu anlayabilmesi için json parser middleware:
app.use(express.json());

//“sunucum gerçekten çalışıyor mu?” testi-route ile:
app.get("/", (req,res) => {
    res.send("Server is running");
})

//bu portu dinlemeye başlayalım:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`)

})
