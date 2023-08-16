/*
 DNS
	Class: dns.Resolver
		resolver.cancel()
	dns.getServers()
	dns.lookup(hostname[, options], callback)
		Supported getaddrinfo flags
	dns.lookupService(address, port, callback)
	dns.resolve(hostname[, rrtype], callback)
	dns.resolve4(hostname[, options], callback)
	dns.resolve6(hostname[, options], callback)
	dns.resolveAny(hostname, callback)
	dns.resolveCname(hostname, callback)
	dns.resolveMx(hostname, callback)
	dns.resolveNaptr(hostname, callback)
	dns.resolveNs(hostname, callback)
	dns.resolvePtr(hostname, callback)
	dns.resolveSoa(hostname, callback)
	dns.resolveSrv(hostname, callback)
	dns.resolveTxt(hostname, callback)
	dns.reverse(ip, callback)
	dns.setServers(servers)
	DNS Promises API
		Class: dnsPromises.Resolver
		dnsPromises.getServers()
		dnsPromises.lookup(hostname[, options])
		dnsPromises.lookupService(address, port)
		dnsPromises.resolve(hostname[, rrtype])
		dnsPromises.resolve4(hostname[, options])
		dnsPromises.resolve6(hostname[, options])
		dnsPromises.resolveAny(hostname)
		dnsPromises.resolveCname(hostname)
		dnsPromises.resolveMx(hostname)
		dnsPromises.resolveNaptr(hostname)
		dnsPromises.resolveNs(hostname)
		dnsPromises.resolvePtr(hostname)
		dnsPromises.resolveSoa(hostname)
		dnsPromises.resolveSrv(hostname)
		dnsPromises.resolveTxt(hostname)
		dnsPromises.reverse(ip)
		dnsPromises.setServers(servers)
	Error codes
	Implementation considerations
		dns.lookup()
	dns.resolve(), dns.resolve*() and dns.reverse()

DNS: The dns module enables name resolution. For example, use it to look up IP addresses of host names.

Although named for the Domain Name System (DNS), it does not always use the DNS protocol for lookups. dns.lookup() uses the operating system facilities to perform name resolution. It may not need to perform any network communication. Developers looking to perform name resolution in the same way that other applications on the same operating system behave should use dns.lookup().

*/

const dns = require('dns');

dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
// address: "93.184.216.34" family: IPv4

/*

 All other functions in the dns module connect to an actual DNS server to perform name resolution. They will always use the network to perform DNS queries. These functions do not use the same set of configuration files used by dns.lookup() (e.g. /etc/hosts). These functions should be used by developers who do not want to use the underlying operating system's facilities for name resolution, and instead want to always perform DNS queries.

*/

const dnS = require('dns');

dnS.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dnS.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});












