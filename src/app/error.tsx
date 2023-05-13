"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Please, try again or return later</button>
    </div>
  );
}
