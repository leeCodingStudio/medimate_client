import dotenv from 'dotenv';

dotenv.config();
function required(key, defaultvalue = undefined) {
    const value = process.env[key] || defaultvalue;
    if(value == null) {
        throw new Error(`key ${key} is undefined`);
    }
    return value;
}

export const config = {
    base:required('BASE_URL'),
    port:parseInt(required('PORT', 3000))
}