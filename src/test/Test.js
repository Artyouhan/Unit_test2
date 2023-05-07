import sortPlayer from '../js/sorthero';

test('Checking the correctness of sorting', () => {
    const data = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
  
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
  
    expect(sortPlayer(data)).toEqual(expected);
    expect(sortPlayer(data)).not.toBe(expected);
  });