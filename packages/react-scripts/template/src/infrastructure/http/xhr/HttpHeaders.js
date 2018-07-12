import _ from 'lodash';

export default class HttpHeaders {
  constructor(wrapped, httpHeaders) {
    this.wrapped = wrapped;
    this.httpHeaders = httpHeaders;
  }

  send(called) {
    if (!_.isUndefined(this.httpHeaders)) {
      const keys = Object.keys(this.httpHeaders);
      _.each(keys, key => {
        this.wrapped.set(key, this.httpHeaders[key]);
      });
    }
    return this.wrapped.send(called);
  }
}
