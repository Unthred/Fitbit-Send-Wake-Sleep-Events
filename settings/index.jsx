function mySettings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Send Wake/Sleep Settings</Text>}>
        <TextInput label="Webhook URL" settingsKey="text" />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
