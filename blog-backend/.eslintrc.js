const path = require('path');

module.exports = {
    "extends": "airbnb-base",
    "settings": {
        "import/resolver": {
            node: { paths: [path.resolve('./src')] }
        },
    },
    "rules": {
        "no-unused-vars": 1,
        "comma-dangle": 0,
        "eol-last": 0,
        "no-console": 0,
        "linebreak-style": [0, "error", "windows"],
        "keyword-spacing": [2, {"overrides": {
            "if": {"after": false},
            "for": {"after": false},
            "while": {"after": false},
            "catch": {"after": false}
        }}]
    }
};