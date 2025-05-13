
const decodeStandard = (param) => {
    switch (param) {
        case 'Pre-primary':
            return ["LKG", "HKG"];
        case 'Primary':
            return ["1", "2", "3", "4", "5"];
        case 'Secondary':
            return ['6', "7"];
        case 'Higher Secondary':
            return ['8', "9", "10"]

        default:
            return []
    }

};

const decodeSubject = (param) => {
    switch (param) {
        case 'Pre-primary':
            return ["English","Maths", "Hindi","Drawing"];
        case 'Primary':
            return ["English","Maths", "Hindi","Drawing","Science","General Knowledge"];
        case 'Secondary':
            return ["English","Maths", "Hindi","Drawing","Science","General Knowledge","Social Science","Sanskrit","Computer Science"];
        case 'Higher Secondary':
            return ["English","Hindi","Maths","Physics","Chemistry","Biology","Computer Science","Social Science","Environmental Science"]

        default:
            return []
    }

};

module.exports = { decodeStandard ,decodeSubject}