import User from "./User";
import Container from "./Container";
import ColumnGrid from "./ColumnGrid";
import Row from "./Row";
import Card from "./Card";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <ColumnGrid columnGridProp="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <Card>
              <User
                image="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                btn1="Follow"
                btn2="Connect"
                heading1="23"
                description1="Friends"
                heading2="50"
                description2="Followers"
                heading3="80"
                description3="Likes"
                userName="Cristina"
                age="22"
                city="Sibiu"
                country="Romania"
                role="Frontend Developer"
                studies="University of Amsterdam"
                footerDescription="This is a description"
                footerLink="Show More"
              />
            </Card>
          </ColumnGrid>
        </Row>
      </Container>
    </div>
  );
}

export default App;
