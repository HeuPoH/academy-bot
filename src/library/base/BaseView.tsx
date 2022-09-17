/* eslint-disable prettier/prettier */
import React from 'react';
import type { IObservableClass, Observable } from './Observable';

type Props = {
  model: Observable;
};

export class BaseView<P extends Props = Props> extends React.Component<P> implements IObservableClass {
  componentDidMount() {
    this.props.model.register(this);
  }

  componentWillUnmount() {
    this.props.model.unregister(this);
  }

  notify(): void {
    this.setState({});
  }
}
