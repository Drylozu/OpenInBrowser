export const strings = {
    label: {
        brazilian_portuguese: "Abra no navegador",
        catalan: "Obrir al navegador",
        english: "Open in browser",
        french: "Ouvrir dans le navigateur",
        german: "Im Browser öffnen",
        italian: "Apri nel browser",
        russian: "Открыть в браузере",
        spanish: "Abrir en el navegador",
        turkish: "Tarayıcıda aç",
    },
    hint: {
        brazilian_portuguese: "Abre o arquivo atual no seu navegador padrão",
        catalan: "Obre el fitxer actual al navegador predeterminat",
        english: "Open the current file in your default browser",
        french: "Ouvre le fichier actuel dans votre navigateur par défaut",
        german: "Öffnet die aktuelle Datei in Ihrem Standardbrowser",
        italian: "Apre il file corrente nel browser predefinito",
        russian: "Открывает текущий файл в браузере по умолчанию",
        spanish: "Abre el archivo actual en tu navegador por defecto",
        turkish: "Mevcut dosyayı varsayılan tarayıcınızda açın",
    }
};

export default function translate(text, language) {
    const string = strings[text][language];
    if (!string) return strings[text].english;
    return string;
}
