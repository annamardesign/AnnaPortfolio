function useFilter() {
const [filter, setFilter] = useState('All');
}
const FILTER_MAP = {
    All: () => true,
    Web: category => !web.category,
    Illustration: category => illustration.category
  };
const FILTER_NAMES = Object.keys(FILTER_MAP);