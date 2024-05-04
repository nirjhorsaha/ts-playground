{
  const createArrayWithTuple = <A, B>(param1: A, param2: B): [A, B] => {
    return [param1, param2];
  };

  const simpleArrayWithTuple = createArrayWithTuple<string, number>(
    "tuple",
    123
  );
  const simpleObjectWithTuple = createArrayWithTuple<string, { name: string }>(
    "objecttuple",
    {
      name: "Practice Object with Tuple",
    }
  );
  console.log(simpleObjectWithTuple);
}
