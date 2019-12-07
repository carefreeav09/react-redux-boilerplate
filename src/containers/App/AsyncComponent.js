import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncHome = loadable({
    loader: () => import('../../containers/Home/HomeContainer'),
    loading: LoadingComponent,
});