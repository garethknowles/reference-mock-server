
const aspsp = (name, fapiFinancialId) => ({
  AuthorisationServers: [{
    AutoRegistrationSupported: true,
    BaseApiDNSUri: `http://${fapiFinancialId}.example.com`,
    ClientRegistrationUri: 'string',
    CustomerFriendlyDescription: 'string',
    CustomerFriendlyLogoUri: '',
    CustomerFriendlyName: name,
    DeveloperPortalUri: 'string',
    OpenIDConfigEndPointUri: 'string',
    PayloadSigningCertLocation: 'string',
    TermsOfService: 'string',
  }],
  externalId: 'string',
  id: fapiFinancialId,
});

const OBAccountPaymentServiceProviders = (req, res) => {
  res.json({
    Resources: [
      aspsp('AAA Example Bank', 'aaa-example-bank'),
      aspsp('BBB Example Bank', 'bbb-example-bank'),
      aspsp('CCC Example Bank', 'ccc-example-bank'),
    ],
  });
};

exports.OBAccountPaymentServiceProviders = OBAccountPaymentServiceProviders;