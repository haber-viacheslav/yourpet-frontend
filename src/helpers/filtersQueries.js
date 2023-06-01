const actualDate = Date.now();
const twoYearAgoBirthday = new Date(0).toISOString().slice(0, 10);

const today = new Date(Date.now()).toISOString().slice(0, 10);
const oneYear = 365 * 24 * 60 * 60 * 1000;
const twoYear = 2 * 365 * 24 * 60 * 60 * 1000;
const lessThenOneYear = new Date(actualDate - oneYear + 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);
const moreThenOneYear = new Date(actualDate - oneYear - 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);
const lessThenTwoYear = new Date(actualDate - twoYear + 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);
const moreThenTwoYear = new Date(actualDate - twoYear - 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const getGenderQueries = (femaleCheck, maleCheck) => {
  if (maleCheck && !femaleCheck) {
    return { gender: 'male' };
  } else if (!maleCheck && femaleCheck) {
    return { gender: 'female' };
  } else {
    return {};
  }
};

const getAgesQueries = (lessOneCheck, oneCheck, twoCheck) => {
  if (lessOneCheck && !oneCheck && !twoCheck) {
    return { toTheDate: today, fromTheDate: lessThenOneYear };
  } else if (lessOneCheck && oneCheck && !twoCheck) {
    return { toTheDate: today, fromTheDate: lessThenTwoYear };
  } else if (lessOneCheck && !oneCheck && twoCheck) {
    return { toTheDate: moreThenTwoYear, fromTheDate: lessThenOneYear };
  } else if (!lessOneCheck && oneCheck && !twoCheck) {
    return { toTheDate: moreThenOneYear, fromTheDate: lessThenTwoYear };
  } else if (!lessOneCheck && oneCheck && twoCheck) {
    return { toTheDate: moreThenOneYear, fromTheDate: twoYearAgoBirthday };
  } else if (!lessOneCheck && !oneCheck && twoCheck) {
    return { toTheDate: moreThenTwoYear, fromTheDate: twoYearAgoBirthday };
  }
};

export const AllFilterQueries = (
  lessOneCheck,
  oneCheck,
  twoCheck,
  femaleCheck,
  maleCheck
) => {
  if (
    (lessOneCheck && oneCheck && twoCheck) ||
    (!lessOneCheck && !oneCheck && !twoCheck)
  ) {
    return { ...getGenderQueries(femaleCheck, maleCheck) };
  } else if ((maleCheck && femaleCheck) || (!maleCheck && !femaleCheck)) {
    return { ...getAgesQueries(lessOneCheck, oneCheck, twoCheck) };
  } else {
    return {
      ...getAgesQueries(lessOneCheck, oneCheck, twoCheck),
      ...getGenderQueries(femaleCheck, maleCheck),
    };
  }
};
