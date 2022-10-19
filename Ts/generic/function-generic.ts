{
  function checkNotNull(arg: number | null): number {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // const res = checkNotNull(123);
  // console.log(res);
  // checkNotNull(null);

  //제네릭 적용 시,
  function checkNotNullGeneric<T>(arg: T): T {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number: number = checkNotNullGeneric(123);
  console.log(number);
  const string: string = checkNotNullGeneric('str');
  console.log(string);
  const bool: boolean = checkNotNullGeneric(true);
  console.log(bool);
}
