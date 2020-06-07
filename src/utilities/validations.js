let required = (propertyType) => { 
  return v => v && v.length > 0 || `You must input a ${propertyType}`
};

let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters`
};

let maxLength = (propertyType, maxLength) => {
    return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
};

let emailFormat = () => {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/;
    return v => v && regex.test(v) || "Must be a valid email"
};

let requiredSelect = (propertyType) => {
    return v => v && typeof v === "object" || `Please select a ${propertyType}`
}

export default {
    required,
    minLength,
    maxLength,
    emailFormat,
    requiredSelect
} 