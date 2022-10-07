/* eslint-disable prettier/prettier */
import React from 'react';
import { IObservableClass, Observable } from './Observable';

export class BaseView<P = {}, S = {}> extends React.Component<P, S> implements IObservableClass {
  protected model = new Observable();

  componentDidMount() {
    this.model.register(this);
  }

  componentWillUnmount() {
    this.model.unregister(this);
  }

  notify(): void {
    this.setState({});
  }
}
