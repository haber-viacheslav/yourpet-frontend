import { useState, useEffect } from 'react';
import {
  useNavigate,
  // useParams,
  // useSearchParams
} from 'react-router-dom';
import { getAllNotices, getPrivateNotices, deleteNotice } from 'api/notices';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Title, Wrapper } from 'components/Friends/Friends.styled';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  const [category, setCategory] = useState('sell');
  const [isFirstRedirect, setIsFirstRedirect] = useState(true);
  const [notices, setNotices] = useState([]);
  const [
    searchQuery,
    // setSearchQuery
  ] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRedirect) {
      navigate('/notices/sell');
    }
    setIsFirstRedirect(false);
  }, [navigate, isFirstRedirect]);

  useEffect(() => {
    try {
      (async () => {
        if (category === 'favorite' || category === 'own') {
          const response = await getPrivateNotices(category + searchQuery);
          setNotices(response.data.data);
        } else {
          const response = await getAllNotices(category + searchQuery);
          setNotices(response.data.data);
        }
      })();
    } catch (error) {}
  }, [searchQuery, category]);

  const handleDeleteBtn = async id => {
    try {
      const index = notices.findIndex(el => el['_id'] === id);
      const updateData = [...notices];
      updateData.splice(index, 1);
      setNotices(updateData);
      await deleteNotice(id);
    } catch (error) {}
  };

  const handleSearch = searchQuery => {
    console.log(searchQuery);
    // setCategory(option);
    // localStorage.setItem('category', option);
  };

  const handleChoose = option => {
    setCategory(option);
    localStorage.setItem('category', option);
  };

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Find your favorite pet</Title>
          </Wrapper>
          <NoticesSearch onSubmit={handleSearch} />
          <NoticesCategoriesNav
            onCategoryClick={handleChoose}
            active={category}
          />
          <NoticesCategoriesList
            notices={notices}
            delNotice={handleDeleteBtn}
          />
        </Container>
      </Section>
    </>
  );
};

export default NoticesPage;
