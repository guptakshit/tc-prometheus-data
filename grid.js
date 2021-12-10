let prometheusMetrics = `# HELP sag_tc_dataset_get_failure_total The number of Get:Failure operations
# TYPE sag_tc_dataset_get_failure_total counter
sag_tc_dataset_get_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_get_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_get_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
# HELP sag_tc_dataset_update_latency_95_percentile 95th percentile of latencies of dataset update operations
# TYPE sag_tc_dataset_update_latency_95_percentile gauge
sag_tc_dataset_update_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2748570.0
sag_tc_dataset_update_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2305504.0
sag_tc_dataset_update_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2563878.0
# HELP jvm_threads_live_threads The current number of live threads including both daemon and non-daemon threads
# TYPE jvm_threads_live_threads gauge
jvm_threads_live_threads 66.0
# HELP jvm_buffer_count_buffers An estimate of the number of buffers in the pool
# TYPE jvm_buffer_count_buffers gauge
jvm_buffer_count_buffers{id="direct",} 259.0
jvm_buffer_count_buffers{id="mapped",} 0.0
# HELP sag_tc_dataset_get_success_total The number of Get:Success operations
# TYPE sag_tc_dataset_get_success_total counter
sag_tc_dataset_get_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 29610.0
sag_tc_dataset_get_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41314.0
sag_tc_dataset_get_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 50563.0
# HELP sag_tc_server_dataset_allocated_index_bytes  
# TYPE sag_tc_server_dataset_allocated_index_bytes gauge
sag_tc_server_dataset_allocated_index_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 8768512.0
sag_tc_server_dataset_allocated_index_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 9035776.0
sag_tc_server_dataset_allocated_index_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 8768512.0
sag_tc_server_dataset_allocated_index_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 9035776.0
# HELP jvm_memory_max_bytes The maximum amount of memory in bytes that can be used for memory management
# TYPE jvm_memory_max_bytes gauge
jvm_memory_max_bytes{area="heap",id="PS Survivor Space",} 3145728.0
jvm_memory_max_bytes{area="heap",id="PS Old Gen",} 2.843738112E9
jvm_memory_max_bytes{area="heap",id="PS Eden Space",} 1.4155776E9
jvm_memory_max_bytes{area="nonheap",id="Metaspace",} -1.0
jvm_memory_max_bytes{area="nonheap",id="Code Cache",} 2.5165824E8
jvm_memory_max_bytes{area="nonheap",id="Compressed Class Space",} 1.073741824E9
# HELP sag_tc_dataset_update_latency_99_percentile 99th percentile of latencies of dataset update operations
# TYPE sag_tc_dataset_update_latency_99_percentile gauge
sag_tc_dataset_update_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 5329744.0
sag_tc_dataset_update_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 4674760.0
sag_tc_dataset_update_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 4468700.0
# HELP sag_tc_cache_get_miss_latency_99_percentile 99th percentile of latencies of misses of cache.get(key) operations
# TYPE sag_tc_cache_get_miss_latency_99_percentile gauge
sag_tc_cache_get_miss_latency_99_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 4104150.0
sag_tc_cache_get_miss_latency_99_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 3931549.0
# HELP jvm_buffer_memory_used_bytes An estimate of the memory that the Java virtual machine is using for this buffer pool
# TYPE jvm_buffer_memory_used_bytes gauge
jvm_buffer_memory_used_bytes{id="direct",} 1.10582933E8
jvm_buffer_memory_used_bytes{id="mapped",} 0.0
# HELP sag_tc_cache_remove_latency_95_percentile 95th percentile of latencies of successful cache.remove(key) operations
# TYPE sag_tc_cache_remove_latency_95_percentile gauge
sag_tc_cache_remove_latency_95_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.062194E7
sag_tc_cache_remove_latency_95_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.2101979E7
# HELP sag_tc_server_dataset_record_count  
# TYPE sag_tc_server_dataset_record_count gauge
sag_tc_server_dataset_record_count{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 3491.0
sag_tc_server_dataset_record_count{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 4502.0
sag_tc_server_dataset_record_count{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 3492.0
sag_tc_server_dataset_record_count{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 4477.0
# HELP jvm_threads_states_threads The current number of threads having NEW state
# TYPE jvm_threads_states_threads gauge
jvm_threads_states_threads{state="runnable",} 13.0
jvm_threads_states_threads{state="blocked",} 0.0
jvm_threads_states_threads{state="waiting",} 27.0
jvm_threads_states_threads{state="timed-waiting",} 26.0
jvm_threads_states_threads{state="new",} 0.0
jvm_threads_states_threads{state="terminated",} 0.0
# HELP sag_tc_cache_put_latency_99_percentile 99th percentile of latencies of successful cache.put(key, val) operations
# TYPE sag_tc_cache_put_latency_99_percentile gauge
sag_tc_cache_put_latency_99_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.17711999E8
sag_tc_cache_put_latency_99_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.2337541E7
# HELP jvm_memory_used_bytes The amount of used memory
# TYPE jvm_memory_used_bytes gauge
jvm_memory_used_bytes{area="heap",id="PS Survivor Space",} 2378992.0
jvm_memory_used_bytes{area="heap",id="PS Old Gen",} 5.7770808E7
jvm_memory_used_bytes{area="heap",id="PS Eden Space",} 2.8066488E7
jvm_memory_used_bytes{area="nonheap",id="Metaspace",} 5.9061888E7
jvm_memory_used_bytes{area="nonheap",id="Code Cache",} 2.4718144E7
jvm_memory_used_bytes{area="nonheap",id="Compressed Class Space",} 8677664.0
# HELP sag_tc_cache_removal_count_total Total number of removes from the cache
# TYPE sag_tc_cache_removal_count_total counter
sag_tc_cache_removal_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 59744.0
sag_tc_cache_removal_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 74822.0
# HELP sag_tc_server_dataset_occupied_persistent_support_bytes  
# TYPE sag_tc_server_dataset_occupied_persistent_support_bytes gauge
sag_tc_server_dataset_occupied_persistent_support_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 251352.0
sag_tc_server_dataset_occupied_persistent_support_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 324144.0
sag_tc_server_dataset_occupied_persistent_support_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 251424.0
sag_tc_server_dataset_occupied_persistent_support_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 322344.0
# HELP sag_tc_dataset_delete_success_total The number of Delete:Success operations
# TYPE sag_tc_dataset_delete_success_total counter
sag_tc_dataset_delete_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 29867.0
sag_tc_dataset_delete_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41419.0
sag_tc_dataset_delete_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 50165.0
# HELP sag_tc_cache_remove_latency_100_percentile Latency maxima of successful cache.remove(key) operations
# TYPE sag_tc_cache_remove_latency_100_percentile gauge
sag_tc_cache_remove_latency_100_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.33818999E8
sag_tc_cache_remove_latency_100_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.28551499E8
# HELP process_uptime_seconds The uptime of the Java virtual machine
# TYPE process_uptime_seconds gauge
process_uptime_seconds 63712.418
# HELP process_start_time_seconds Start time of the process since unix epoch.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.639057736609E9
# HELP sag_tc_server_dataset_allocated_heap_bytes  
# TYPE sag_tc_server_dataset_allocated_heap_bytes gauge
sag_tc_server_dataset_allocated_heap_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 4685824.0
sag_tc_server_dataset_allocated_heap_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 5210112.0
sag_tc_server_dataset_allocated_heap_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 4685824.0
sag_tc_server_dataset_allocated_heap_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 5210112.0
# HELP jvm_gc_memory_promoted_bytes_total Count of positive increases in the size of the old generation memory pool before GC to after GC
# TYPE jvm_gc_memory_promoted_bytes_total counter
jvm_gc_memory_promoted_bytes_total 1.935571E9
# HELP sag_tc_clustered_hit_count_total Total number of gets that returned a value from the cluster tier
# TYPE sag_tc_clustered_hit_count_total counter
sag_tc_clustered_hit_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 540860.0
sag_tc_clustered_hit_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 675148.0
# HELP sag_tc_server_dataset_index_occupied_storage_bytes  
# TYPE sag_tc_server_dataset_index_occupied_storage_bytes gauge
sag_tc_server_dataset_index_occupied_storage_bytes{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 2808128.0
sag_tc_server_dataset_index_occupied_storage_bytes{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 2160032.0
sag_tc_server_dataset_index_occupied_storage_bytes{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1647904.0
sag_tc_server_dataset_index_occupied_storage_bytes{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 2240320.0
# HELP process_cpu_usage The "recent cpu usage" for the Java Virtual Machine process
# TYPE process_cpu_usage gauge
process_cpu_usage 8.450773985939523E-4
# HELP sag_tc_dataset_update_not_found_total The number of Update:NotFound operations
# TYPE sag_tc_dataset_update_not_found_total counter
sag_tc_dataset_update_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 33268.0
sag_tc_dataset_update_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41115.0
sag_tc_dataset_update_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 54692.0
# HELP sag_tc_dataset_get_latency_95_percentile 95th percentile of latencies of dataset read operations
# TYPE sag_tc_dataset_get_latency_95_percentile gauge
sag_tc_dataset_get_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2552219.0
sag_tc_dataset_get_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2194880.0
sag_tc_dataset_get_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2719000.0
# HELP sag_tc_cache_get_hit_latency_95_percentile 95th percentile of latencies of successful cache.get(key) operations (hits)
# TYPE sag_tc_cache_get_hit_latency_95_percentile gauge
sag_tc_cache_get_hit_latency_95_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2151310.0
sag_tc_cache_get_hit_latency_95_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2140960.0
# HELP sag_tc_clustered_miss_count_total Total number of gets that failed to return a value from the cluster tier
# TYPE sag_tc_clustered_miss_count_total counter
sag_tc_clustered_miss_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 204143.0
sag_tc_clustered_miss_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 248575.0
# HELP sag_tc_dataset_get_not_found_total The number of Get:NotFound operations
# TYPE sag_tc_dataset_get_not_found_total counter
sag_tc_dataset_get_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 33495.0
sag_tc_dataset_get_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41301.0
sag_tc_dataset_get_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 54335.0
# HELP sag_tc_dataset_stream_request_total The number of Stream:Request operations
# TYPE sag_tc_dataset_stream_request_total counter
sag_tc_dataset_stream_request_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 63105.0
sag_tc_dataset_stream_request_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 82615.0
sag_tc_dataset_stream_request_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 104898.0
# HELP sag_tc_dataset_add_already_exists_total The number of Add:AlreadyExists operations
# TYPE sag_tc_dataset_add_already_exists_total counter
sag_tc_dataset_add_already_exists_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 29750.0
sag_tc_dataset_add_already_exists_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41239.0
sag_tc_dataset_add_already_exists_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 50192.0
# HELP sag_tc_server_dataset_allocated_primary_key_bytes  
# TYPE sag_tc_server_dataset_allocated_primary_key_bytes gauge
sag_tc_server_dataset_allocated_primary_key_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 385024.0
sag_tc_server_dataset_allocated_primary_key_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 499712.0
sag_tc_server_dataset_allocated_primary_key_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 385024.0
sag_tc_server_dataset_allocated_primary_key_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 499712.0
# HELP system_cpu_usage The "recent cpu usage" for the whole system
# TYPE system_cpu_usage gauge
system_cpu_usage 0.70821677257449
# HELP sag_tc_dataset_stream_failure_total The number of Stream:Failure operations
# TYPE sag_tc_dataset_stream_failure_total counter
sag_tc_dataset_stream_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1900.0
sag_tc_dataset_stream_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1789.0
sag_tc_dataset_stream_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2275.0
# HELP sag_tc_server_dataset_allocated_memory_bytes  
# TYPE sag_tc_server_dataset_allocated_memory_bytes gauge
sag_tc_server_dataset_allocated_memory_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1.4887936E7
sag_tc_server_dataset_allocated_memory_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1.589248E7
sag_tc_server_dataset_allocated_memory_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1.4887936E7
sag_tc_server_dataset_allocated_memory_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1.589248E7
# HELP sag_tc_dataset_update_failure_total The number of Update:Failure operations
# TYPE sag_tc_dataset_update_failure_total counter
sag_tc_dataset_update_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_update_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_update_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
# HELP sag_tc_dataset_get_latency_99_percentile 99th percentile of latencies of dataset read operations
# TYPE sag_tc_dataset_get_latency_99_percentile gauge
sag_tc_dataset_get_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 5014999.0
sag_tc_dataset_get_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3534400.0
sag_tc_dataset_get_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 4454212.0
# HELP sag_tc_dataset_add_success_total The number of Add:Success operations
# TYPE sag_tc_dataset_add_success_total counter
sag_tc_dataset_add_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 33355.0
sag_tc_dataset_add_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41377.0
sag_tc_dataset_add_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 54706.0
# HELP sag_tc_server_dataset_index_record_count  
# TYPE sag_tc_server_dataset_index_record_count gauge
sag_tc_server_dataset_index_record_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 2664.0
sag_tc_server_dataset_index_record_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 3339.0
sag_tc_server_dataset_index_record_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 2653.0
sag_tc_server_dataset_index_record_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 3322.0
# HELP sag_tc_cache_get_hit_latency_99_percentile 99th percentile of latencies of successful cache.get(key) operations (hits)
# TYPE sag_tc_cache_get_hit_latency_99_percentile gauge
sag_tc_cache_get_hit_latency_99_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 3558861.0
sag_tc_cache_get_hit_latency_99_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 3479155.0
# HELP sag_tc_dataset_delete_latency_100_percentile Latency maxima of dataset delete operations
# TYPE sag_tc_dataset_delete_latency_100_percentile gauge
sag_tc_dataset_delete_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1.09423E7
sag_tc_dataset_delete_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2.125293E8
sag_tc_dataset_delete_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3.8826772E7
# HELP sag_tc_dataset_add_failure_total The number of Add:Failure operations
# TYPE sag_tc_dataset_add_failure_total counter
sag_tc_dataset_add_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_add_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_add_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
# HELP jvm_gc_memory_allocated_bytes_total Incremented for an increase in the size of the (young) heap memory pool after one GC to before the next
# TYPE jvm_gc_memory_allocated_bytes_total counter
jvm_gc_memory_allocated_bytes_total 3.5368163472E10
# HELP sag_tc_clustered_eviction_count_total Number of mappings removed from the cluster tier due to space limitations
# TYPE sag_tc_clustered_eviction_count_total counter
sag_tc_clustered_eviction_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 141039.0
sag_tc_clustered_eviction_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 176308.0
# HELP sag_tc_cache_put_latency_100_percentile Latency maxima of successful cache.put(key, val) operations
# TYPE sag_tc_cache_put_latency_100_percentile gauge
sag_tc_cache_put_latency_100_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.32243999E8
sag_tc_cache_put_latency_100_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.86472277E8
# HELP sag_tc_server_dataset_allocated_persistent_support_bytes  
# TYPE sag_tc_server_dataset_allocated_persistent_support_bytes gauge
sag_tc_server_dataset_allocated_persistent_support_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1048576.0
sag_tc_server_dataset_allocated_persistent_support_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1146880.0
sag_tc_server_dataset_allocated_persistent_support_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1048576.0
sag_tc_server_dataset_allocated_persistent_support_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1146880.0
# HELP jvm_gc_pause_seconds Time spent in GC pause
# TYPE jvm_gc_pause_seconds summary
jvm_gc_pause_seconds_count{action="end of major GC",cause="Metadata GC Threshold",} 1.0
jvm_gc_pause_seconds_sum{action="end of major GC",cause="Metadata GC Threshold",} 0.143
jvm_gc_pause_seconds_count{action="end of major GC",cause="Ergonomics",} 20.0
jvm_gc_pause_seconds_sum{action="end of major GC",cause="Ergonomics",} 1.616
jvm_gc_pause_seconds_count{action="end of minor GC",cause="Metadata GC Threshold",} 1.0
jvm_gc_pause_seconds_sum{action="end of minor GC",cause="Metadata GC Threshold",} 0.015
jvm_gc_pause_seconds_count{action="end of minor GC",cause="Allocation Failure",} 699.0
jvm_gc_pause_seconds_sum{action="end of minor GC",cause="Allocation Failure",} 8.41
# HELP jvm_gc_pause_seconds_max Time spent in GC pause
# TYPE jvm_gc_pause_seconds_max gauge
jvm_gc_pause_seconds_max{action="end of major GC",cause="Metadata GC Threshold",} 0.0
jvm_gc_pause_seconds_max{action="end of major GC",cause="Ergonomics",} 0.0
jvm_gc_pause_seconds_max{action="end of minor GC",cause="Metadata GC Threshold",} 0.0
jvm_gc_pause_seconds_max{action="end of minor GC",cause="Allocation Failure",} 0.0
# HELP jvm_threads_peak_threads The peak live thread count since the Java virtual machine started or peak was reset
# TYPE jvm_threads_peak_threads gauge
jvm_threads_peak_threads 78.0
# HELP http_server_requests_seconds  
# TYPE http_server_requests_seconds summary
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/stomp/**",} 19.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/stomp/**",} 0.0377005
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/store/latest",} 90.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/store/latest",} 0.8009028
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/latest",} 147.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/latest",} 1114.5350557
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/actuator/prometheus",} 123.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/actuator/prometheus",} 22.8783614
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/eventLogs",} 20.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/eventLogs",} 0.3190831
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/specifications",} 16.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/specifications",} 0.1128438
http_server_requests_seconds_count{exception="None",method="POST",outcome="SUCCESS",status="201",uri="/api/connections",} 1.0
http_server_requests_seconds_sum{exception="None",method="POST",outcome="SUCCESS",status="201",uri="/api/connections",} 1.667394
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/info",} 20.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/info",} 0.0421411
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections/probe",} 1.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections/probe",} 1.3666427
http_server_requests_seconds_count{exception="None",method="GET",outcome="CLIENT_ERROR",status="404",uri="/**",} 48.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="CLIENT_ERROR",status="404",uri="/**",} 2.2364124
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/user",} 19.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/user",} 0.2615965
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/sizing",} 3.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/sizing",} 0.0493077
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections",} 20.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections",} 1.3099324
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/stripes/{stripeName}/servers/{serverName}/latest",} 3.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/stripes/{stripeName}/servers/{serverName}/latest",} 0.0296712
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/history",} 3.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/history",} 0.1280744
http_server_requests_seconds_count{exception="None",method="GET",outcome="INFORMATIONAL",status="101",uri="/stomp/**",} 19.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="INFORMATIONAL",status="101",uri="/stomp/**",} 0.4247618
http_server_requests_seconds_count{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/**",} 936.0
http_server_requests_seconds_sum{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/**",} 1795.7316541
# HELP http_server_requests_seconds_max  
# TYPE http_server_requests_seconds_max gauge
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/stomp/**",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/store/latest",} 0.0083902
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/latest",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/actuator/prometheus",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/eventLogs",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/specifications",} 0.0
http_server_requests_seconds_max{exception="None",method="POST",outcome="SUCCESS",status="201",uri="/api/connections",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/info",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections/probe",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="CLIENT_ERROR",status="404",uri="/**",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/user",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/sizing",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/connections",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/stripes/{stripeName}/servers/{serverName}/latest",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/api/statistics/connections/{connectionName}/caching/history",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="INFORMATIONAL",status="101",uri="/stomp/**",} 0.0
http_server_requests_seconds_max{exception="None",method="GET",outcome="SUCCESS",status="200",uri="/**",} 0.0
# HELP sag_tc_server_dataset_occupied_heap_bytes  
# TYPE sag_tc_server_dataset_occupied_heap_bytes gauge
sag_tc_server_dataset_occupied_heap_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 352968.0
sag_tc_server_dataset_occupied_heap_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 505312.0
sag_tc_server_dataset_occupied_heap_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 353248.0
sag_tc_server_dataset_occupied_heap_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 502520.0
# HELP sag_tc_server_offheap_allocated_memory_bytes  
# TYPE sag_tc_server_offheap_allocated_memory_bytes gauge
sag_tc_server_offheap_allocated_memory_bytes{alias="offheap-2",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 0.0
sag_tc_server_offheap_allocated_memory_bytes{alias="offheap-2",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 0.0
sag_tc_server_offheap_allocated_memory_bytes{alias="offheap-1",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 2.53012992E8
sag_tc_server_offheap_allocated_memory_bytes{alias="offheap-1",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 2.53012992E8
# HELP sag_tc_server_dataset_index_access_count  
# TYPE sag_tc_server_dataset_index_access_count gauge
sag_tc_server_dataset_index_access_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 504672.0
sag_tc_server_dataset_index_access_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1499632.0
sag_tc_server_dataset_index_access_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 0.0
sag_tc_server_dataset_index_access_count{alias="myStringCell$$$STRING$$$BTREE",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 0.0
# HELP jvm_gc_live_data_size_bytes Size of long-lived heap memory pool after reclamation
# TYPE jvm_gc_live_data_size_bytes gauge
jvm_gc_live_data_size_bytes 2.9399296E7
# HELP jvm_threads_daemon_threads The current number of live daemon threads
# TYPE jvm_threads_daemon_threads gauge
jvm_threads_daemon_threads 36.0
# HELP jvm_buffer_total_capacity_bytes An estimate of the total capacity of the buffers in this pool
# TYPE jvm_buffer_total_capacity_bytes gauge
jvm_buffer_total_capacity_bytes{id="direct",} 1.10582932E8
jvm_buffer_total_capacity_bytes{id="mapped",} 0.0
# HELP sag_tc_dataset_update_latency_100_percentile Latency maxima of dataset update operations
# TYPE sag_tc_dataset_update_latency_100_percentile gauge
sag_tc_dataset_update_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3.1015758E7
sag_tc_dataset_update_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2.20073E7
sag_tc_dataset_update_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1.3406512E7
# HELP sag_tc_cache_remove_latency_99_percentile 99th percentile of latencies of successful cache.remove(key) operations
# TYPE sag_tc_cache_remove_latency_99_percentile gauge
sag_tc_cache_remove_latency_99_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.18548076E8
sag_tc_cache_remove_latency_99_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2.27462343E8
# HELP sag_tc_dataset_update_success_total The number of Update:Success operations
# TYPE sag_tc_dataset_update_success_total counter
sag_tc_dataset_update_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 29837.0
sag_tc_dataset_update_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41501.0
sag_tc_dataset_update_success_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 50206.0
# HELP sag_tc_server_dataroot_total_disk_usage_bytes  
# TYPE sag_tc_server_dataroot_total_disk_usage_bytes gauge
sag_tc_server_dataroot_total_disk_usage_bytes{alias="platform",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 1009577.0
sag_tc_server_dataroot_total_disk_usage_bytes{alias="dataroot-1",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 8.3539402E8
sag_tc_server_dataroot_total_disk_usage_bytes{alias="dataroot-1",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 9.97446562E8
sag_tc_server_dataroot_total_disk_usage_bytes{alias="dataroot-2",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 0.0
sag_tc_server_dataroot_total_disk_usage_bytes{alias="dataroot-2",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 0.0
sag_tc_server_dataroot_total_disk_usage_bytes{alias="platform",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 969485.0
# HELP sag_tc_server_caching_pool_allocated_size_bytes  
# TYPE sag_tc_server_caching_pool_allocated_size_bytes gauge
sag_tc_server_caching_pool_allocated_size_bytes{alias="resource-pool-b",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM",entity_type="cache_cluster_tier_manager",server="stripe-1-server-2",stripe="stripe-1",} 0.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="cache2",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache2",entity_type="cache_cluster_tier",server="stripe-1-server-1",stripe="stripe-1",} 2326528.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="resource-pool-b",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM",entity_type="cache_cluster_tier_manager",server="stripe-1-server-1",stripe="stripe-1",} 0.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="cache2",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache2",entity_type="cache_cluster_tier",server="stripe-1-server-2",stripe="stripe-1",} 2326528.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="cache1",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache1",entity_type="cache_cluster_tier",server="stripe-1-server-1",stripe="stripe-1",} 2310144.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="resource-pool-a",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM",entity_type="cache_cluster_tier_manager",server="stripe-1-server-1",stripe="stripe-1",} 0.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="cache1",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache1",entity_type="cache_cluster_tier",server="stripe-1-server-2",stripe="stripe-1",} 2310144.0
sag_tc_server_caching_pool_allocated_size_bytes{alias="resource-pool-a",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM",entity_type="cache_cluster_tier_manager",server="stripe-1-server-2",stripe="stripe-1",} 0.0
# HELP sag_tc_server_dataset_main_record_occupied_storage_bytes  
# TYPE sag_tc_server_dataset_main_record_occupied_storage_bytes gauge
sag_tc_server_dataset_main_record_occupied_storage_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 827744.0
sag_tc_server_dataset_main_record_occupied_storage_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 1117584.0
sag_tc_server_dataset_main_record_occupied_storage_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 828160.0
sag_tc_server_dataset_main_record_occupied_storage_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 1111392.0
# HELP sag_tc_clustered_removal_count_total Total number of removes from the cluster tier
# TYPE sag_tc_clustered_removal_count_total counter
sag_tc_clustered_removal_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 59744.0
sag_tc_clustered_removal_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 74822.0
# HELP sag_tc_dataset_delete_failure_total The number of Delete:Failure operations
# TYPE sag_tc_dataset_delete_failure_total counter
sag_tc_dataset_delete_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_delete_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
sag_tc_dataset_delete_failure_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 0.0
# HELP sag_tc_dataset_add_latency_100_percentile Latency maxima of dataset add operations
# TYPE sag_tc_dataset_add_latency_100_percentile gauge
sag_tc_dataset_add_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2.089451E8
sag_tc_dataset_add_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1.44979E7
sag_tc_dataset_add_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3.7588395E7
# HELP sag_tc_dataset_add_latency_95_percentile 95th percentile of latencies of dataset add operations
# TYPE sag_tc_dataset_add_latency_95_percentile gauge
sag_tc_dataset_add_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3062666.0
sag_tc_dataset_add_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2495600.0
sag_tc_dataset_add_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2830263.0
# HELP sag_tc_server_restartable_store_total_usage_bytes  
# TYPE sag_tc_server_restartable_store_total_usage_bytes gauge
sag_tc_server_restartable_store_total_usage_bytes{alias="platform#platform-data#entityData",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 990975.0
sag_tc_server_restartable_store_total_usage_bytes{alias="platform#platform-data#entityData",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 950883.0
sag_tc_server_restartable_store_total_usage_bytes{alias="platform#platform-data#transactionsData",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 18602.0
sag_tc_server_restartable_store_total_usage_bytes{alias="dataroot-1#default-frs-container#default-cachedata",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 9.31052083E8
sag_tc_server_restartable_store_total_usage_bytes{alias="platform#platform-data#transactionsData",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 18602.0
sag_tc_server_restartable_store_total_usage_bytes{alias="dataroot-1#store#data",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-1",stripe="stripe-1",} 6.6165876E7
sag_tc_server_restartable_store_total_usage_bytes{alias="dataroot-1#default-frs-container#default-cachedata",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 7.79925582E8
sag_tc_server_restartable_store_total_usage_bytes{alias="dataroot-1#store#data",connection_name="PrometheusCluster1",entity_name="VoltronTmsConnection:PrometheusCluster1",entity_type="nms_entity",server="stripe-1-server-2",stripe="stripe-1",} 5.5243903E7
# HELP sag_tc_cache_put_count_total Total number of puts to the cache
# TYPE sag_tc_cache_put_count_total counter
sag_tc_cache_put_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 660514.0
sag_tc_cache_put_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 823946.0
# HELP sag_tc_clustered_put_count_total Total number of puts to the cluster tier
# TYPE sag_tc_clustered_put_count_total counter
sag_tc_clustered_put_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 660514.0
sag_tc_clustered_put_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 823946.0
# HELP sag_tc_dataset_delete_not_found_total The number of Delete:NotFound operations
# TYPE sag_tc_dataset_delete_not_found_total counter
sag_tc_dataset_delete_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 33238.0
sag_tc_dataset_delete_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 41196.0
sag_tc_dataset_delete_not_found_total{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 54733.0
# HELP sag_tc_server_caching_store_data_size_bytes  
# TYPE sag_tc_server_caching_store_data_size_bytes gauge
sag_tc_server_caching_store_data_size_bytes{alias="cache2",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache2",entity_type="cache_cluster_tier",server="stripe-1-server-1",stripe="stripe-1",} 2031616.0
sag_tc_server_caching_store_data_size_bytes{alias="cache2",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache2",entity_type="cache_cluster_tier",server="stripe-1-server-2",stripe="stripe-1",} 2031616.0
sag_tc_server_caching_store_data_size_bytes{alias="cache1",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache1",entity_type="cache_cluster_tier",server="stripe-1-server-1",stripe="stripe-1",} 2031616.0
sag_tc_server_caching_store_data_size_bytes{alias="cache1",clusterTierManager="TinyPounderCM",connection_name="PrometheusCluster1",entity_name="TinyPounderCM$cache1",entity_type="cache_cluster_tier",server="stripe-1-server-2",stripe="stripe-1",} 2031616.0
# HELP sag_tc_dataset_add_latency_99_percentile 99th percentile of latencies of dataset add operations
# TYPE sag_tc_dataset_add_latency_99_percentile gauge
sag_tc_dataset_add_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 6131542.0
sag_tc_dataset_add_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 4652403.0
sag_tc_dataset_add_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 5480323.0
# HELP sag_tc_cache_miss_count_total Total times a get didn't return a value
# TYPE sag_tc_cache_miss_count_total counter
sag_tc_cache_miss_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 204143.0
sag_tc_cache_miss_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 248575.0
# HELP sag_tc_server_dataset_occupied_primary_key_bytes  
# TYPE sag_tc_server_dataset_occupied_primary_key_bytes gauge
sag_tc_server_dataset_occupied_primary_key_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 223424.0
sag_tc_server_dataset_occupied_primary_key_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 288128.0
sag_tc_server_dataset_occupied_primary_key_bytes{alias="dataset2",connection_name="PrometheusCluster1",entity_name="dataset2",entity_type="dataset",server="stripe-1-server-2",stripe="stripe-1",} 223488.0
sag_tc_server_dataset_occupied_primary_key_bytes{alias="dataset1",connection_name="PrometheusCluster1",entity_name="dataset1",entity_type="dataset",server="stripe-1-server-1",stripe="stripe-1",} 286528.0
# HELP sag_tc_cache_hit_count_total Total times a get return a value
# TYPE sag_tc_cache_hit_count_total counter
sag_tc_cache_hit_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1777399.0
sag_tc_cache_hit_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2223260.0
# HELP jvm_classes_loaded_classes The number of classes that are currently loaded in the Java virtual machine
# TYPE jvm_classes_loaded_classes gauge
jvm_classes_loaded_classes 13081.0
# HELP logback_events_total Number of error level events that made it to the logs
# TYPE logback_events_total counter
logback_events_total{level="warn",} 44.0
logback_events_total{level="debug",} 248.0
logback_events_total{level="error",} 7.0
logback_events_total{level="trace",} 334362.0
logback_events_total{level="info",} 179.0
# HELP jvm_classes_unloaded_classes_total The total number of classes unloaded since the Java virtual machine has started execution
# TYPE jvm_classes_unloaded_classes_total counter
jvm_classes_unloaded_classes_total 163.0
# HELP sag_tc_dataset_delete_latency_95_percentile 95th percentile of latencies of dataset delete operations
# TYPE sag_tc_dataset_delete_latency_95_percentile gauge
sag_tc_dataset_delete_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2279672.0
sag_tc_dataset_delete_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2191200.0
sag_tc_dataset_delete_latency_95_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 2392292.0
# HELP jvm_memory_committed_bytes The amount of memory in bytes that is committed for the Java virtual machine to use
# TYPE jvm_memory_committed_bytes gauge
jvm_memory_committed_bytes{area="heap",id="PS Survivor Space",} 3145728.0
jvm_memory_committed_bytes{area="heap",id="PS Old Gen",} 9.8041856E7
jvm_memory_committed_bytes{area="heap",id="PS Eden Space",} 3.1981568E7
jvm_memory_committed_bytes{area="nonheap",id="Metaspace",} 6.6060288E7
jvm_memory_committed_bytes{area="nonheap",id="Code Cache",} 2.4772608E7
jvm_memory_committed_bytes{area="nonheap",id="Compressed Class Space",} 9961472.0
# HELP sag_tc_cache_get_miss_latency_100_percentile Latency maxima of misses of cache.get(key) operations
# TYPE sag_tc_cache_get_miss_latency_100_percentile gauge
sag_tc_cache_get_miss_latency_100_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 7664501.0
sag_tc_cache_get_miss_latency_100_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 9010500.0
# HELP sag_tc_cache_eviction_count_total Total number of evictions from the cache
# TYPE sag_tc_cache_eviction_count_total counter
sag_tc_cache_eviction_count_total{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 141039.0
sag_tc_cache_eviction_count_total{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 176308.0
# HELP sag_tc_dataset_delete_latency_99_percentile 99th percentile of latencies of dataset delete operations
# TYPE sag_tc_dataset_delete_latency_99_percentile gauge
sag_tc_dataset_delete_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 4988868.0
sag_tc_dataset_delete_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 3913637.0
sag_tc_dataset_delete_latency_99_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 5066400.0
# HELP system_cpu_count The number of processors available to the Java virtual machine
# TYPE system_cpu_count gauge
system_cpu_count 4.0
# HELP sag_tc_cache_put_latency_95_percentile 95th percentile of latencies of successful cache.put(key, val) operations
# TYPE sag_tc_cache_put_latency_95_percentile gauge
sag_tc_cache_put_latency_95_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.5941399E7
sag_tc_cache_put_latency_95_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.5785959E7
# HELP jvm_gc_max_data_size_bytes Max size of long-lived heap memory pool
# TYPE jvm_gc_max_data_size_bytes gauge
jvm_gc_max_data_size_bytes 2.843738112E9
# HELP sag_tc_cache_get_miss_latency_95_percentile 95th percentile of latencies of misses of cache.get(key) operations
# TYPE sag_tc_cache_get_miss_latency_95_percentile gauge
sag_tc_cache_get_miss_latency_95_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 3068356.0
sag_tc_cache_get_miss_latency_95_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 2870600.0
# HELP sag_tc_dataset_get_latency_100_percentile Latency maxima of dataset read operations
# TYPE sag_tc_dataset_get_latency_100_percentile gauge
sag_tc_dataset_get_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset2",dataset_instance="dataset2-3",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1.72551E7
sag_tc_dataset_get_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-2",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 1.15054E7
sag_tc_dataset_get_latency_100_percentile{client="24896@127.0.0.1:Store:TinyPounderDataset",client_address="127.0.0.1",client_name="Store:TinyPounderDataset",client_pid="24896",connection_name="PrometheusCluster1",dataset="dataset1",dataset_instance="dataset1-1",dataset_manager="TinyPounderDataset",instance="p0e0fMoYlUnj0enszodokQ",} 8464100.0
# HELP sag_tc_cache_get_hit_latency_100_percentile Latency maxima of successful cache.get(key) operations (hits)
# TYPE sag_tc_cache_get_hit_latency_100_percentile gauge
sag_tc_cache_get_hit_latency_100_percentile{cache="cache2",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.6428801E7
sag_tc_cache_get_hit_latency_100_percentile{cache="cache1",cache_manager="TinyPounderCM",client="24896@127.0.0.1:Ehcache:TinyPounderCM",client_address="127.0.0.1",client_name="Ehcache:TinyPounderCM",client_pid="24896",clustered="Y",connection_name="PrometheusCluster1",instance="2c76fb06-c9f8-4adc-a11b-af247d3f2f69",} 1.1520165E8`;

document.getElementById('prometheusFormatData').innerHTML = prometheusMetrics;
let prometheusMetricsArr = prometheusMetrics.split('\n');
let prometheusMetricName = '';
let prometheusMetricsJSON = [];
prometheusMetricsArr.forEach(item => {
    if (item.startsWith('# HELP ')) {
        let arr = item.split(' ');
        prometheusMetricName = arr[2];
        prometheusMetricsJSON.push({
            metricName: prometheusMetricName,
            help: arr.slice(3).join(" "),
            type: '',
            timeseries: []
        })
    } else if (item.startsWith('# TYPE')) {
        prometheusMetricsJSON.find(item => item.metricName == prometheusMetricName).type = item.split(' ')[3];
    } else {
        // time series of the metric
        let timeSeriesArr = item.split(/{|}/);
        let metricName = timeSeriesArr[0];
        let labelsArr = timeSeriesArr[1]?.split(',');
        labelsArr?.pop();
        let value = timeSeriesArr[2];
        let labelsArrOutput = [];
        labelsArr?.forEach(label => {
            let labelArr = label.split('=');
            let labelName = labelArr[0];
            let labelValue = JSON.parse(labelArr[1]);
            labelsArrOutput.push({
                labelName: labelName,
                labelValue, labelValue
            })

        })
        let prometheusMetric = prometheusMetricsJSON.find(item => item.metricName == prometheusMetricName);
        prometheusMetric.timeseries.push({
            metricName: metricName,
            labels: labelsArrOutput,
            value: value,
            type: prometheusMetric.type,
            help: prometheusMetric.help
        })
    }
})
// console.log(prometheusMetricsJSON);

let filterMetrics = (prometheusMetricsJSON, tc = 'y') => {
    let metrics;
    if (tc === 'y') {
        metrics = prometheusMetricsJSON.filter(item => item.metricName.startsWith('sag'))
    } else {
        metrics = prometheusMetricsJSON.filter(item => !item.metricName.startsWith('sag'))
    }
    return metrics.sort(sortByProperty("metricName"));
}
function sortByProperty(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

// console.log(filterMetrics(prometheusMetricsJSON, 'y'));

let prometheusJSONToTreeData = (prometheusMetricsJSON) => {
    let prometheusMetrics = JSON.parse(JSON.stringify(prometheusMetricsJSON));
    return prometheusMetrics.map((item, index, arr) => {
        let metricName = item.metricName;
        let type = item.type;
        let help = item.help;
        let timeseries = item.timeseries;
        let gridRow = {
            metricName: metricName,
            type: type,
            help: help,
            _attributes: {
                expanded: true,
            },
        }
        if (!metricName.startsWith('sag')) {
            gridRow._attributes.expanded = false;
        }
        if (timeseries?.length > 1) {
            let _children = [];
            timeseries.forEach(element => {
                let labels = element.labels?.map(label => {
                    return label.labelName + "=" + '"' + label.labelValue + '"';
                })
                element.labels = labels.join(", ")
                _children.push(element);
            });
            gridRow._children = _children;
        }
        return gridRow;
    });
}
let treeData = prometheusJSONToTreeData(prometheusMetricsJSON);
treeData.sort(sortByProperty('metricName'));

let nonTCMetricGridTreeData = filterMetrics(treeData, 'N');
treeData = filterMetrics(treeData);

// grid

const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: treeData,
    //   rowHeaders: ['checkbox'],
    bodyHeight: 500,
    scrollX: true,
    scrollY: true,
    treeColumnOptions: {
        name: 'metricName',
        useCascadingCheckbox: true
    },
    columns: [
        {
            header: 'Metric Name',
            name: 'metricName',
            sortable: true,
            sortingType: 'desc',
            width: 375
        },
        {
            header: 'Type',
            name: 'type',
            width: 100
        },
        {
            header: 'Value',
            name: 'value',
            width: 100
        },
        {
            header: 'Labels',
            name: 'labels',
            width: 600,
            whiteSpace: 'normal',
        },
        {
            header: 'Help',
            name: 'help',
            width: 400,
            whiteSpace: 'normal',

        },
    ],
    columnOptions: {
        resizable: true
    },
    header: {
        align: 'left',
    }
});

grid.on('expand', ev => {
    const { rowKey } = ev;
    const descendantRows = grid.getDescendantRows(rowKey);
    if (!descendantRows.length) {
        grid.appendRow(
            {
                name: 'dynamic loading data',
                _children: [
                    {
                        name: 'leaf row'
                    },
                    {
                        name: 'internal row',
                        _children: []
                    }
                ]
            },
            { parentRowKey: rowKey }
        );
    }
});

grid.on('collapse', ev => {
    const { rowKey } = ev;
    const descendantRows = grid.getDescendantRows(rowKey);
});


const nonTCMetricGrid = new tui.Grid({
    el: document.getElementById('nonTCMetricGrid'),
    data: nonTCMetricGridTreeData,
    //   rowHeaders: ['checkbox'],
    bodyHeight: 500,
    scrollX: true,
    scrollY: true,
    treeColumnOptions: {
        name: 'metricName',
        useCascadingCheckbox: true
    },
    columns: [
        {
            header: 'Metric Name',
            name: 'metricName',
            sortable: true,
            sortingType: 'desc',
            //   width: 360
        },
        {
            header: 'Type',
            name: 'type',
            // width: 100
        },
        {
            header: 'Value',
            name: 'value',
            // width: 100
        },
        {
            header: 'Labels',
            name: 'labels',
            // width: 200,
            whiteSpace: 'normal',
        },
        {
            header: 'Help',
            name: 'help',
            // width: 400,
            whiteSpace: 'normal',

        },
    ],
    columnOptions: {
        resizable: true
    },
    header: {
        align: 'left',
    }
    // rowHeaders: ['rowNum'],
});

nonTCMetricGrid.on('expand', ev => {
    const { rowKey } = ev;
    const descendantRows = nonTCMetricGrid.getDescendantRows(rowKey);
    if (!descendantRows.length) {
        nonTCMetricGrid.appendRow(
            {
                name: 'dynamic loading data',
                _children: [
                    {
                        name: 'leaf row'
                    },
                    {
                        name: 'internal row',
                        _children: []
                    }
                ]
            },
            { parentRowKey: rowKey }
        );
    }
});

nonTCMetricGrid.on('collapse', ev => {
    const { rowKey } = ev;
    const descendantRows = nonTCMetricGrid.getDescendantRows(rowKey);
});
