# PROD default Hosting code recovery (WP199, 2026-11-21)

Status: partial source match; this is not a full release or environment recovery claim.
Project/site: geminimasters-2ee46 / geminimasters-2ee46, live channel.
Active release: sites/geminimasters-2ee46/channels/live/releases/1753583905438000, version sites/geminimasters-2ee46/versions/51f9fdd2ab2821bf, released 2025-07-27T02:38:25.438Z.
The public .git/refs/heads/main pointer names source commit 7936fc148dd6bc11be74e8983c22de6c30b23777 in malroch/soul-map-client-pages.
All 14 tracked files published outside .git and Firebase-generated paths matched this commit byte for byte by read-only public HTTP SHA-256 comparison. No SoulMap body was printed in the report.
The release manifest has 61 files: 14 matched tracked files, 2 Firebase-generated files, and 45 .git metadata files. Public /.git/HEAD returned HTTP 200 with Git-ref content. The source firebase.json ignore rule would exclude dot directories, so the deployed .git files are an unresolved release-configuration mismatch and security exposure.
Do not use this ref to claim exact release reproduction or deploy it. Separately review and contain the published Git metadata, then verify a safe Hosting release and its complete source/config identity. No live change occurred in this WP199 step.
