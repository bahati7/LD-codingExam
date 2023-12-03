function findIntersectionTime(person1Availability, person2Availability, timezone1, timezone2) {
    // Convert availability to Date objects in their respective timezones
    const person1AvailabilityStart = new Date(person1Availability[0] + ' ' + timezone1);
    const person1AvailabilityEnd = new Date(person1Availability[1] + ' ' + timezone1);
    const person2AvailabilityStart = new Date(person2Availability[0] + ' ' + timezone2);
    const person2AvailabilityEnd = new Date(person2Availability[1] + ' ' + timezone2);
  
    // Convert availability to UTC
    const person1AvailabilityStartUTC = person1AvailabilityStart.toLocaleString('en-US', { timeZone: 'UTC' });
    const person1AvailabilityEndUTC = person1AvailabilityEnd.toLocaleString('en-US', { timeZone: 'UTC' });
    const person2AvailabilityStartUTC = person2AvailabilityStart.toLocaleString('en-US', { timeZone: 'UTC' });
    const person2AvailabilityEndUTC = person2AvailabilityEnd.toLocaleString('en-US', { timeZone: 'UTC' });
  
    // Find intersection time in UTC
    const intersectionStartUTC = new Date(Math.max(person1AvailabilityStartUTC, person2AvailabilityStartUTC));
    const intersectionEndUTC = new Date(Math.min(person1AvailabilityEndUTC, person2AvailabilityEndUTC));
  
    if (intersectionStartUTC < intersectionEndUTC) {
      // Convert intersection time to local timezones
      const intersectionStartLocal = intersectionStartUTC.toLocaleString('en-US', { timeZone: timezone1 });
      const intersectionEndLocal = intersectionEndUTC.toLocaleString('en-US', { timeZone: timezone2 });
  
      console.log('====================================================');
      console.log('Both persons are available in\n');
      console.log(`Person 1 availability: ${person1AvailabilityStart.toLocaleString('en-US', { timeZone: timezone1 })}`);
      console.log(`Person 1 availability in UTC: ${person1AvailabilityStartUTC}`);
      console.log('\n');
      console.log(`Person 2 availability: ${person2AvailabilityStart.toLocaleString('en-US', { timeZone: timezone2 })}`);
      console.log(`Person 2 availability in UTC: ${person2AvailabilityStartUTC}`);
      console.log('\n');
  
      console.log('\nBoth persons are available in\n');
      console.log(intersectionStartUTC.toLocaleString('en-US', { timeZone: 'UTC' }));
      console.log(intersectionStartLocal);
      console.log(intersectionEndLocal);
  
      console.log('\n====================================================');
    } else {
      // No intersection time
      console.log('====================================================');
      console.log('No intersecting time available between Person 1 and Person2');
      console.log('\n====================================================');
    }
  }

  function findWeeklyIntersection(person1WeeklyAvailability, person2WeeklyAvailability, timezone1, timezone2) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weeklyAvailability = {};
  
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const person1Availability = person1WeeklyAvailability[i];
      const person2Availability = person2WeeklyAvailability[i];
  
      const intersectionInterval = findIntersectionTime(person1Availability, person2Availability, timezone1, timezone2);
      if (intersectionInterval) {
        if (!weeklyAvailability[day]) {
          weeklyAvailability[day] = [];
        }
        weeklyAvailability[day].push(intersectionInterval);
      }
    }
  
    console.log('Common availability in UTC for the entire week:');
    for (const day in weeklyAvailability) {
      const intervals = weeklyAvailability[day];
      console.log(`${day}: ${intervals.map(interval => interval.toLocaleString('en-US', { timeZone: 'UTC' })).join(', ')}`);
    }
  
    console.log('\nTranslate that to common availability ranges in time zone 1 and time timezone 2\n');
    for (const day in weeklyAvailability) {
      const intervals = weeklyAvailability[day];
      console.log(
        `${day}: ${intervals.map(interval =>
          `${interval.toLocaleString('en-US', { timeZone: timezone1 })} - ${interval.toLocaleString('en-US', { timeZone: timezone2 })}`
        ).join(', ')}`
      );
    }
  }
  
  // Example usage with different timezones
  const person1WeeklyAvailability = [
    ['6:30 am', '3:30 pm'],
    ['8:00 am', '5:00 pm'],
    ['9:00 am', '2:00 pm'],
    ['10:00 am', '3:00 pm'],
    ['11:00 am', '4:00 pm'],
    ['12:00 pm', '5:00 pm'],
    ['1:00 pm', '6:00 pm'],
  ];
  
  const person2WeeklyAvailability = [
    ['8:30 am', '4:30 am'],
    ['9:30 am', '6:00 pm'],
    ['10:30 am', '7:00 pm'],
    ['11:30 am', '8:00 pm'],
    ['1:30 pm', '9:00 pm'],
    ['2:30 pm', '10:00 pm'],
    ['3:30 pm', '11:00 pm'],
  ];
  
  const timezone1 = 'America/Los_Angeles';
  const timezone2 = 'Europe/London';
  
  findWeeklyIntersection(person1WeeklyAvailability, person2WeeklyAvailability, timezone1, timezone2);
  