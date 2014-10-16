Manufacturing.Framework
=======================

The Framework project contains a few common types and classes that help avoid duplication between the various manufacturing samples.

It also contains a few interfaces and production implementations such as ITimer to make testing with mocks viable.

## Common Data Types

### DatasourceRecord

A datasource is a stream of data that creates `DatasourceRecord` instances. The `DatasourceRecord` is the smallest record of data from a stream.

In order to maintain sanity, the `DatasourceRecord` was created as the standard for recording data from sensors or any other data provider. A `DatasourceRecord` uses a byte[] to store the actual value, and relies on the caller to convert the data into that structure. Extension methods are provided to make it easy to store values of type `string`, `double`, and many others.

### EventRecord

EventRecord inherits from DatasourceRecord and adds additional metadata. While the datasource represents a reading from a stream of data, the EventRecord represents a non-stream record. The primary difference is that an event can have any amount of arbitrary data.

The EventRecord is generic, and stores event-specific data in a `Dictionary<string, string>`. For commonly used event types, subclass the EventRecord, and wrap the Dictionary with custom properties.


# License

Microsoft Developer Experience & Evangelism

Copyright (c) Microsoft Corporation. All rights reserved.

THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

The example companies, organizations, products, domain names, e-mail addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, places, or events is intended or should be inferred.
