interface IObservable {
  register(obs: IObservableClass): () => void;
  unregister(obs: IObservableClass): void;
  notifyObservers(): void;
}

export interface IObservableClass {
  notify(): void;
}

export class Observable implements IObservable {
  private observers: IObservableClass[] = [];

  register(obs: IObservableClass) {
    this.observers.push(obs);
    return () => this.unregister(obs);
  }

  unregister(obs: IObservableClass): void {
    this.observers = this.observers.filter((o) => o !== obs);
  }

  notifyObservers(): void {
    this.observers.forEach((o) => o.notify());
  }
}
