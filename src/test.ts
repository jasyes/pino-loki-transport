import pino from 'pino';
import path from 'path';
import { LogWorkerOptions } from './logWorker.interface';

const target = path.resolve('./dist/logWorker.js');
console.log('start worker taget', target);
const logger = pino({
  transport: {
    target, 
    options: {
      lokiUrl: 'http://10.10.17.5'
    } as LogWorkerOptions
  }
});
console.log('pino started');
setInterval(() => {
  console.log('pino sent test');
  logger.error({obj:123},'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
  logger.error({obj:123},'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.');
  logger.info({obj:321},'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo ac erat tincidunt scelerisque. Cras euismod finibus arcu volutpat aliquam. Proin a hendrerit est. Sed venenatis, lorem nec egestas elementum, elit tellus condimentum metus, non blandit diam orci eu risus. Mauris in odio at tortor varius pulvinar. Vivamus varius hendrerit sem, vel imperdiet purus efficitur at. Praesent condimentum volutpat nulla at laoreet. Mauris sit amet porttitor dolor, vitae euismod lacus. Etiam vel interdum mauris.');

}, 1000)
