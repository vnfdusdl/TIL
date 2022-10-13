const color: [number, number, number] = [255, 0, 255];

type httpResponse = [number, string];
const goodResponse: httpResponse = [200, 'OK'];
// ts는 튜플의 initailizaion 시점에서만 순서와 타입을 확인하고, 그 뒤에는 다른 타입과 요소들이 들어오는 걸 확인하지 않는다.
// 다른 요소 (404)가 들어오고, pop을 하여 tuple의 형식에 맞지 않는다 하더라도 에러를 뱉지 않는다.
goodResponse.push(404);
goodResponse.pop();
goodResponse.pop();

const responses: httpResponse[] = [
  [200, 'OK'],
  [404, 'Not Found'],
];

enum deliveryStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
