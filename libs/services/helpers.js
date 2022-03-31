require('dotenv').config()
const config = require('config')
const fs = require('fs')
// const sanitizeHtml = require('sanitize-html')
const geoEncoder = require('../../data/geo/geoJSONEncoder')
const Multer = require('fastify-multer')
// const { html, reb, rew } = require('../constraints/regex.js')



const ops = {}

// Initiate Multer Object (a middleware for handling multipart/form-data),
// when env is not monkey chaos
ops.cloudMulter = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 3 * 1024 * 1024 // no larger than 3mb.
    },
    // Makes req.file undefined in request if not a valid image file.
    fileFilter: (req, file, cb) => {
        // console.log('fileFilter')
        // console.log(req.body)
        if (file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg') {
            cb(null, true)
        } else {
            req.error = 'Only .png, .jpg and .jpeg allowed'
            cb(null, false, new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    }
}).single('avatar')

ops.localMulter = Multer({ dest: 'uploads/' }).single('avatar')

let lid
if(config.get('HEROKU')) {
    lid = require('langdetect')
} else {
    const LanguageDetection = require('@smodin/fast-text-language-detection')
    lid = new LanguageDetection()
}

ops.getLanguage = async (text) => {
    const language = config.get('HEROKU') ? lid.detect(text) : await lid.predict(text, 3)
    if(language[0].prob > 0.5)
        return language[0].lang
    else
        return 'und'
}

/**
 * Limit HTML tags of a listings description
 * @param {String} str
 * @return {String}
 */
ops.sanitize = function sanitize(str) {

}

/**
 * Clean sensitive data like: CB number, Phone num, ... Mask sensitive with XXX
 * Based on Richard's Ramblings Regex patterns.
 * Author: Anthony Goldman
 * Source: github.com/jaideepchilukuri/aideepch/blob/
 * 2bd3d43adbbf951d07420d9dac944a2f5eec76a8/
 * tools/maintainance/EJS/emptyconfigs/19.11.0/src/survey/surveyutils.js
 * @param {String} blob blob String text blob to be cleaned up.
 * @param {Number} maxlen
 * @return {String}
 */
ops.cleanSensitive = function cleanSensitive(blob, maxlen) {

}

/**
 * Hash https://werxltd.com/wp/2010/05/13/
 * javascript-implementation-of-javas-string-hashcode-method/
 * @param {String} s
 * @return {String}
 */
ops.hashCode = function hashCode(s) {
    let hash = 0; let i; let chr
    if (s.length === 0) return hash
    for (i = 0; i < s.length; i++) {
        chr = s.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}

ops.readJSON = function readJSON(path) {
    const rawdata = fs.readFileSync(path)
    const data = JSON.parse(rawdata)
    return data
}

// transform geojson coordinates into an array of L.LatLng
const coordinates = geoEncoder.getBorders()

/**
 * Check if point is inside a Polygon
 * @param {{lat, lng}} point a geopoint to be checked agains vs
 * @param {*} vs Coordinates which is a polygone,
 * that represents country borders defined in ../data/
 * @return {Boolean}
 */
ops.isPointInsidePolygon = function isPointInsidePolygon(point, vs = coordinates) {

}

/**
 * Generate initials from an email string
 * Like "sracer2024@yahoo.com" => "S2"
 * @param {String} email
 * @return {String}
 */
ops.initials = function initials(email) {
    email = email.split('@')[0].replace(/[0-9]/g, '').split(/[.\-_]/) || []
    if (email.length == 1) {
        return email[0].slice(0, 2).toUpperCase()
    }
    email = (
        (email.shift()[0] || '') + (email.pop()[0] || '')
    ).toUpperCase()
    return email
}



module.exports = { ops }
