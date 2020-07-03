import  SampleContainer from './containers/SampleContainer';
import pageLayoutHoc from '../../hocs/pageLayoutHoc';
export const sampleRoute = [
  {
    path: '/',
    component : pageLayoutHoc(SampleContainer),
    key: 'sample route'
  }
]
