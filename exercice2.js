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
  