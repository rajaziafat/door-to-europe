export const ageGroupOptions = ["כן", "לא"] as const;
export type ageGroupOptions = (typeof ageGroupOptions)[number];

export const nailTimeOptions = ["כן", "לא", "לא ידוע לי"] as const;
export type NailTimeOptions = (typeof nailTimeOptions)[number];

export const individualityOptions = [
  "עיבוי הציפורניים ושינוי הצורה שלהן",
  "שינוי צבע הציפורן",
  "ניתוק של הציפורן",
  "אחר",
] as const;
export type IndividualityOptions = (typeof individualityOptions)[number];

export const nearestBranchOptions = [
  "ראשל״צ",
  "נהריה",
  "כרמיאל",
  "קריות",
  "אשדוד",
  "חיפה",
  "נתניה",
  "הרצליה",
  "תל אביב",
  "ירושלים",
  "פתח תקווה",
] as const;
export type NearestBranchOptions = (typeof nearestBranchOptions)[number];
