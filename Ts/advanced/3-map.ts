// 기존의 타입을 이용하면서 다른 형태로 변환할 수 있는 것. => 재사용성을 높임
{
  type Video = {
    title: string;
    author: string;
  };

  // type OptionalVideo = {
  //   title?: string;
  //   author?: string;
  // };
  //일일히 반복해서 적어주기 매우 귀찮음 => map을 통해서 한번에 옵셔널로 만들어주자

  //map을 돌릴 타입을 만들어줌

  //Optional 타입은 들어오는 T타입의 key를 하나씩 돌면서 P에 할당하고, ?: 키워드와 함께 value 값을 할당하여 리턴.
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  //VideoOptional 타입은 Optional 타입에 Video 타입을 넣어 리턴된 타입.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  type VideoOptional = Optional<Video>;
  const video: VideoOptional = {
    title: 'option',
  };
  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'optinal',
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const readonlyAnimal: ReadOnly<Animal> = {
    name: 'sdf',
    age: 20,
  };
  // readonlyAnimal.name =

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
