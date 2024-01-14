const fs = require("fs");

i18nFiles = fs.readdirSync("./src/i18n/");

localities = {}

i18nFiles.forEach((i18nFile) => {
    key = i18nFile.split(".")[1];
    if(key === "en"){
        return
    }
    localities[key] = {
        "translation": "src/i18n/"+i18nFile
    }
})

angularJson = JSON.parse(fs.readFileSync("./angular.json"));

angularJson.projects.frontend.i18n.locales = localities;

fs.writeFileSync("./angular.json", JSON.stringify(angularJson));
