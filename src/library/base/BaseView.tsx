/* eslint-disable prettier/prettier */
import React from 'react';
import type { IObservableClass, Observable } from './Observable';

interface Props {
  model: Observable;
}

export class BaseView<P extends Props = Props, S = {}> extends React.Component<P, S> implements IObservableClass {
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
