let studentIEPWeek = [
  monday = {
    date: "Sept 4",
    id: 1,
    day: 'Monday',
    morning: {
      8: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Tuesday = {
    date: "Sept 5",
    id: 2,
    day: 'Tuesday',
    morning: {
      8: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Wednesday = {
    date: "Sept 6",
    id: 3,
    day: 'Wednesday',
    morning: {
      8: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Thursday = {
    date: "Sept 7",
    id: 4,
    day: 'Thursday',
    morning: {
      8: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Friday = {
    date: "Sept 8",
    id: 5,
    day: 'Friday',
    morning: {
      8: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
    9: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: false,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  }
]

function blackoutDates (value) {
  for (let i = 8; i <= 11; i++) {
    studentIEPWeek[value].morning[i].parent = true;
      }
  for (let i = 1; i <= 5 ; i++) {
    studentIEPWeek[value].afternoon[i].parent = true;
  }
}

function morningOrAfternoon (value) {
  for(let key in studentIEPWeek){
  switch (true) {
    case value == 'morning':
          for (let i = 1; i <= 5; i++) {
            studentIEPWeek[key].afternoon[i].parent = false;
            }
      break;
    case value == 'afternoon':
          for (let i = 8; i <= 11; i++) {
            studentIEPWeek[key].morning[i].parent = false;
            }
      break;
    }
  }
}

module.exports = {morningOrAfternoon, blackoutDates, studentIEPWeek}
