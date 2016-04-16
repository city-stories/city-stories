import bunyan from 'bunyan';

const bunyanOptions = {
  name: 'city-stories',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    }, {
      level: 'debug',
      type: 'rotating-file',
      path: 'logger.log',
      period: '1d',
      count: 3
    }
  ],
  serializers: bunyan.stdSerializers,
  src: true
};

export default bunyan.createLogger(bunyanOptions);
