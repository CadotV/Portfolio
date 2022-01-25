export default function (context) {
    // Ajouter la propriété userAgent au contexte
    context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}