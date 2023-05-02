import '@momentum-ui/design-tokens/dist/index.css';

const MyMomentumComponent = () => (
  <div className="md-theme-darkWebex">
    <p style={{
      backgroundColor: 'var(--avatar-presence-icon-schedule)',
      color: 'var(--theme-text-primary-normal)',
    }}>
      Hello World
    </p>
  </div>
);

export default MyMomentumComponent;