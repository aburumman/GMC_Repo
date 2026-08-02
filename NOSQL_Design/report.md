Challenges during schema refactor
The principal challenge was separating operational consistency from analytical flexibility. The original single‑document order model guaranteed strong consistency but was ill‑suited for heavy aggregations. Moving to a CQRS‑like pattern—where writes go to the operational store and analytics queries a separate denormalized view—required careful handling of dual‑write and ordering. We opted for Change Streams to capture inserts atomically, but network failures between the operational cluster and the analytics consumer introduced a risk of temporary inconsistency that had to be accepted in favour of availability.

Impact of new requirements on design
The high availability mandate forced us to formalise a multi‑region, sharded cluster with majority write/read concerns, which slightly increases write latency but provides tolerance to node loss. The analytics requirement fundamentally changed the schema: instead of trying to make the raw orders table do double duty, we introduced pre‑aggregated collections. This denormalization trades extra storage and data duplication for queries that are orders of magnitude faster, as heavy aggregations are replaced by simple range scans.

Improvements achieved

Scalability: Sharding allows the system to handle increased user traffic and data volume linearly.

Availability: Geographic replica sets and majority concerns ensure the app remains online during regional outages without sacrificing order status consistency.

Query performance: Analytical queries that would have required full‑collection scans and group‑by operations now hit tiny pre‑aggregated documents, reducing latency from seconds to milliseconds and freeing operational resources for core transactions.

In essence, the refactor preserves strong consistency where it matters (order status) while embracing eventual consistency and denormalization for the analytics workload, creating a balanced, production‑ready NoSQL design.

