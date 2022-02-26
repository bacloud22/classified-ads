module.exports = {
    features: {
        a: true,
        b: false,
    },
    NODE_PORT: 3000,
    HEROKU: true,
    ERROR_STACK: false,
    PIPELINE_KEYWORDS_SECONDS: 86400, //seconds in a day
    // DATABASE : 'mongodb://localhost:27017/listings_db_dev',
    APIHost: 'https://classified-ads-bacloud14.herokuapp.com/',
    COOKIE_NAME: 'classified-ads-login',
    OUTLOOK: {
    // Office 365 server
        MAIL_SERVER: 'smtp.office365.com',
        // secure SMTP
        SMTP_PORT: '587',
        TLS: { ciphers: 'SSLv3' }
    },
    PING_LIMITER: {
        RATE_LIMIT: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 5 // limit each IP to 100 requests per windowMs
        },
        SLOW_DOWN_LIMIT: {
            windowMs: 15 * 60 * 1000, // 15 minutes
            delayAfter: 100, // allow 100 requests per 15 minutes, then...
            delayMs: 500 // begin adding 500ms of delay per request above 100:
            // request # 101 is delayed by  500ms
        }
    },
    TAG_SIZE: 35
}

