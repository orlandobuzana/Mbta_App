
import MBTA from 'mbta-client';
 
// Instantiate MBTA with your API key
const mbta = new MBTA("dee7e1e039704d419640b45a7c2cdf23");
 
// Fetch data, passing filters as options. Filter documentation for
// each function: https://api-v3.mbta.com/docs/swagger/index.html#/
const predictions = mbta.fetchPredictions({ stop: 42 });
 console.log(predictions);
// Use an array for filters that accept multiple values
const stops = mbta.fetchStops({ id: [70080, 'Back Bay'] });

const subwayRoutes = mbta.fetchRoutes({ type: 'subway' });
console.log(subwayRoutes);
/*
// Some fetch functions accept a `type` or `route_type` filter. This can
// be provided as a string ('bus', 'subway', etc.) or route_type code:
// https://developers.google.com/transit/gtfs/reference/routes-file
const subwayRoutes = await mbta.fetchRoutes({ type: 'subway' });
console.log(subwayRoutes); 
// Filter by `direction_id` to only get results going in one direction.
// `direction_id` maps to the index of the route's `direction_names`.
// Example: Red line `direction_names` are `['South', 'North']`.
// Include `direction_id: 1` in options for Northbound results.
const north = await mbta.fetchPredictions({ route: 'Red', direction_id: 1 });
 
// Get results based on `latitude`/`longitude`, and optional `radius`.
const local = await mbta.fetchStops({ latitude: 42.373, longitude: -71.119 });
 
// Sort by `arrival_time`, `departure_time`, etc. See MBTA docs for each
// endpoint's sort options. `descending: true` will reverse sort order.
const sorted = await mbta.fetchPredictions({
  stop: 42,
  sort: 'arrival_time',
  descending: true,
});
 
// Alerts have a number of extra filters. See MBTA docs for best practices.
const alerts = await mbta.fetchAlerts({
  sort: 'cause',
  activity: 'BOARD',
  datetime: 'NOW',
  severity: [2, 3],
});

// By default, returns an array of arrival times in ISO8601 format
const arr = mbta.selectArrivals(response);
// `convertTo` returns time left in ms, seconds, minutes, hours
const dep = mbta.selectDepartures(response, { convertTo: 'minutes' });

// For paginated results, provide `limit` and optional `offset`
const results = await mbta.fetchPredictions({ stop: 42, limit: 2 });
 
// Use the result to fetch the next page
const secondPageResults = await mbta.fetchNextPage(results);
// Use the next page result to fetch the page after that
const thirdPageResults = await mbta.fetchNextPage(secondPageResults);
// Fetch first or last page from any result
const firstPageResults = await mbta.fetchFirstPage(results);
const lastPageResults = await mbta.fetchLastPage(results);

mbta.fetchStops(options);
mbta.fetchTrips(options);
mbta.fetchRoutes(options);
mbta.fetchShapes(options);
mbta.fetchVehicles(options);
mbta.fetchServices(options);
mbta.fetchSchedules(options);
mbta.fetchFacilities(options);
mbta.fetchPredictions(options);
mbta.fetchLiveFacilities(options);
*/