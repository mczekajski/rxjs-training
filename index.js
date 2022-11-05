import { from, Observable } from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import http from "http";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const url =
  "http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript";

console.log("FROM ARRAY EXAMPLE");
from(numbers)
  .pipe(
    map((n) => ({ x: n })),
    filter((obj) => obj.x < 7),
    scan((prev, cur) => prev.concat(cur), [])
  )
  .subscribe((data) => console.log(data));

console.log("FROM URL EXAMPLE");
const data$ = Observable.create(http.get(url, (res) => res));

data$.subscribe((data) => console.log(data));
