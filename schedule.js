let studentIEPWeek = [
  monday = {
    id: 1,
    day: 'Monday',
    morning: {
      8: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Tuesday = {
    id: 2,
    day: 'Tuesday',
    morning: {
      8: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Wednesday = {
    id: 3,
    day: 'Wednesday',
    morning: {
      8: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Thursday = {
    id: 4,
    day: 'Thursday',
    morning: {
      8: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      9: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  },
  Friday = {
    id: 5,
    day: 'Friday',
    morning: {
      8: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
    9: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      10: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      11: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    },
    afternoon: {
      1: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      2: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      3: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      4: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      },
      5: {
        parent: true,
        SpecialEd: false,
        Service1: false,
        GenEd: false
      }
    }
  }
]

blackoutDates([1,2]);
contactStakeholders();

function blackoutDates (noGoArray) {
  noGoArray.forEach(day => {
    studentIEPWeek.forEach(weekday => {
      if (day == weekday.id) {
        for (let i = 8; i <= 11; i++) {
          weekday.morning[i].parent = false;
            }
        for (let i = 1; i <= 5 ; i++) {
          weekday.afternoon[i].parent = false;
        }
      }
    })
  })
morningOrAfternoon(2)
}

function morningOrAfternoon (number) {
  switch (true) {
    case number == 1:
      studentIEPWeek.forEach(weekday => {
          for (let i = 1; i <= 5; i++) {
            weekday.afternoon[i].parent = false;
            }
        })
      break;
    case number == 2:
      studentIEPWeek.forEach(weekday => {
          for (let i = 8; i <= 11; i++) {
            weekday.morning[i].parent = false;
            }
        })
      break;
  }

}

console.log(studentIEPWeek);

function contactStakeholders(){
  let slotsValid = [];
  studentIEPWeek.forEach(weekday => {
    for (let i = 8; i <= 11; i++) {
      if (weekday.morning[i].parent == true) {
        slotsValid.push(`${weekday.day}, at ${i}:00am`);
      }
    }
    for (let i = 1; i <= 5; i++) {
      if (weekday.afternoon[i].parent == true) {
        slotsValid.push(`${weekday.day}, at ${i}:00pm.`);
      }
    }
  })
  console.log(slotsValid)
}
