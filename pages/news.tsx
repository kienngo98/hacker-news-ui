import { GetStaticProps } from "next";
import { Post } from "../classes/Item";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

const News = ({ news }: { news: Post[] }) => {
  console.log(news);
  return (
    <CardContainer>
      {news.map((post) => (
        <Card key={post.id} post={post}/>
      ))}
    </CardContainer>
  );
};

export default News;

const getStaticProps: GetStaticProps = async () => {
  const base: string = "https://hacker-news.firebaseio.com/v0";
  const newsIds: number[] = await fetch(`${base}/newstories.json`).then((res) =>
    res.json()
  );
  const first20 = newsIds.slice(0, 20);
  const request = first20.map((id) => fetch(`${base}/item/${id}.json`).then(res => res.json()));
  const news = await Promise.all(request);
  return {
    props: {
      news,
    },
    // revalidate: 10
  };
};

export { getStaticProps };
