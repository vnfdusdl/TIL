// interface Either {
//   left: () => number;
//   right: () => number;
// }

// class SimpleEither implements Either {
//   constructor(private leftValue: number, private rightValue: number) {}
//   left(): number {
//     return this.leftValue;
//   }
//   right(): number {
//     return this.rightValue;
//   }
// }
// const ethier = new SimpleEither(4, 5);
// console.log(ethier.left());
// console.log(ethier.right());


// 제네릭 적용
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const ethier = new SimpleEither(123, 'SDF');
console.log(ethier.left());
console.log(ethier.right());
