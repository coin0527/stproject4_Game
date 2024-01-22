import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div``;
const Con = styled.div`
  width: 100%;
  max-width: 75%;
  height: 80vh;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px 5%;
  margin: 15px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`;
const Box = styled.div`
  border: 1px solid #999;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  font-weight: 700;
  background-color: #fff;
`;
const ImageBox1 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjlfMTUg%2FMDAxNjUzODMxNTYwMjE5.VWue51KbcDed-K33lskkN9M7VmgqWuG_4EFfm1066UQg.o7lAOaKkEcFRQTK5JxA_n4rOcwKwLC5fLvzL8FddvuQg.JPEG.rkdxoalsdy%2FGobang_2022-05-28_14-48-23-425.jpg&type=sc960_832");
  background-size: cover;
`;
const ImageBox2 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160402_19%2Fmaddara_1459606960178nrrdB_JPEG%2FUntitled-1.jpg&type=a340");
  background-size: cover;
`;
const ImageBox3 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160402_19%2Fmaddara_1459606960178nrrdB_JPEG%2FUntitled-1.jpg&type=a340");
  background-size: cover;
`;
const ImageBox4 = styled.div`
  width: 100%;
  height: 75%;
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160402_19%2Fmaddara_1459606960178nrrdB_JPEG%2FUntitled-1.jpg&type=a340");
  background-size: cover;
`;

export const Home = () => {
  return (
    <Wrap>
      <Con>
        <Box>
          <Link to="/omok">
            <ImageBox1 />
          </Link>
          오목
        </Box>
        <Box>
          <ImageBox2 />
          Comming Soon
        </Box>
        <Box>
          <ImageBox3 />
          Comming Soon
        </Box>
        <Box>
          <ImageBox4 />
          Comming Soon
        </Box>
      </Con>
    </Wrap>
  );
};
